// client_id: tkbip8ll0kn2lp3umx4j687lco1r6p
// https://api.twitch.tv/helix/streams?client_id=tkbip8ll0kn2lp3umx4j687lco1r6p&user_login=JustJavahound

import type { NextApiRequest, NextApiResponse } from 'next'
import TwitchProvider from 'next-auth/providers/twitch'

const client_id = process.env.TWITCH_CLIENT_ID
const client_secret = process.env.TWITCH_CLIENT_SECRET

function buildGet(accessToken: String) {
    return async function get(endpoint:string) {
        const headers = new Headers()
        headers.set("Authorization", `Bearer ${accessToken}`)
        headers.set("Client-Id", client_id ?? "")

        const response = await fetch(endpoint, {
            method: "GET",
            headers,
        })

        if(!response.ok) {
            console.error(`Could not fetch ${endpoint}`)
        }

        const json = await response.json()

        return json
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === "GET") {
    const tokenResponse = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`, {
        method: "POST",
    })

    const tokenJson = await tokenResponse.json()

    if(!tokenResponse.ok) {
        console.error(tokenJson)
    }

    const get = buildGet(tokenJson.access_token)

    const userJson = await get(`https://api.twitch.tv/helix/users?login=justjavahound`)
    const viewCount = userJson.data[0].view_count
    const userId = userJson.data[0].id

    const streamJson = await get(`https://api.twitch.tv/helix/streams?user_id=${userId}`)
    if (streamJson.data.length <= 0) {
        res.status(404).json({message: "Stream is offline"})
    }
    const isLive = streamJson.data[0].type === "live"
    const viewerCount = streamJson.data[0].viewer_count

    res.status(200).json({ userId, streamJson, isLive, viewerCount })
  } else {
    res.setHeader("Allow", "GET")
    res.status(405).json({ message: "Method not allowed" })
  }

}