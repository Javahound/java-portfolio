import Head from "next/head";
import { WebsiteName } from "../../utils/WebsiteName";

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog {WebsiteName}</title>
            </Head>
            <h2 style={{ margin: `20rem auto`, width: `90%`, textAlign: `center`}}>Nothing for now.<br />This is just a placeholder!</h2>
        </>
    )
}