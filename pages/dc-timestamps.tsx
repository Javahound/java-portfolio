import React, { useEffect, useState } from "react"
import Card from "../components/Card"
import Script from 'next/script'

var date = new Date()
var defaultValueDate = new Date(date).toISOString().split('T')[0]
var defaultValueTime = new Date(date).toISOString().split('T')[1].split('.')[0].slice(0, -3)

const TimestampGenerator = ({ keywords, description }) => {
    const [select,setSelect] = useState('relative')
    var outPreview = "in 1 minute"

    function updateOutputPreview() {
        if (select == 'relative') {
            outPreview = "in 1 minute"
        } else if (select == 'time_short') {
            outPreview = new Date(date).toISOString().split('T')[1].split('.')[0].slice(0, -3)
        } else {}
    }

var app

    return (
        <>
        <Script>
            function a() {
                app = document.getElementById("outPreview").innerHTML({outPreview});
            }
        </Script>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <div className="min-w-full h-screen text-center">
                <div className='max-w-[1200px] w-full h-full mx-auto p-2 flex justify-center'>
                    <div className="mt-40 lg:mt-40">
                        <div className="bg-white/10 rounded-3xl py-8 hover:cursor-pointer ease-in duration-200">
                            <div className="block w-full md:flex items-center">
                                <div className="-mt-4 mb-4 px-4 xs:px-8 max-w-[960px]">
                                    <h1 className="mt-4 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7] gradient-move">Discord Title Generator</h1>
                                    <div className="flex my-2 mx-2">
                                        <p className="text-left left w-full py-2 px-4">Date</p>
                                        <input type="date" name="" id="date" data-date-format className="right bg-[#22212b] w-[100%] py-2 px-2 rounded-3xl border-r-[.125rem] border-r-transparent border-solid" defaultValue={defaultValueDate}/>
                                    </div>
                                    <div className="flex my-2 mx-2">
                                        <p className="text-left left w-full py-2 px-4">Time</p>
                                        <input type="time" name="" id="time" className="right bg-[#22212b] w-[100%] py-2 px-2 rounded-3xl" defaultValue={defaultValueTime} />
                                    </div>
                                    <div className="flex my-2 mx-2">
                                        <p className="text-left left w-full py-2 px-4">Type</p>
                                        <select name="type" id="type" value={select} onChange={ (e) => {setSelect(e.target.value); updateOutputPreview()}} className="right bg-[#22212b] w-[98%] py-2 px-2 rounded-3xl border-r-[.5rem] border-r-transparent border-solid ">
                                            <option value="time_short">Short Time</option>
                                            <option value="time_long">Long Time</option>
                                            <option value="date_short">Short Date</option>
                                            <option value="date_long">Long Date</option>
                                            <option value="date_long_time_short">Long Date + Short Time</option>
                                            <option value="date_long_day_time_short">Date + Day +  Time</option>
                                            <option value="relative">Relative</option>
                                        </select>
                                    </div>
                                    <div className="flex my-2 mx-2">
                                        <p className="text-left left w-full py-2 px-4">Output Preview</p>
                                        <p id="outPreview" className="right bg-[#40444b] min-w-fit py-2 px-2 rounded-md">{outPreview}</p>
                                    </div>
                                    <h2 className="mt-12 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7] gradient-move">Output</h2>
                                    <div className="flex">
                                        <input type="text" name="" id="" className="right bg-[#22212b] w-[70%] py-2 px-4 rounded-3xl mx-auto" />
                                        <button className="w-[20%] shadow-transparent mx-auto bg-gradient-to-r from-[#4856a8] to-[#8b5cb8]">Copy</button>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





const typeFormats = {
    't': { timeStyle: 'short'},
    'T': { timeStyle: 'medium'},
    'd': { dateStyle: 'short'},
    'D': { dateStyle: 'long'},
    'f': { dateStyle: 'long', timeStyle: 'short'},
    'F': { dateStyle: 'full', timeStyle: 'short'},
    'R': { style: 'long', numeric: 'auto'},
}

function automaticRelativeDifference(d) {
	const diff = -((new Date().getTime() - d.getTime())/1000)|0;
	const absDiff = Math.abs(diff);
	console.log(diff);
	if (absDiff > 86400*30*10) {
		return { duration: Math.round(diff/(86400*365)), unit: 'years' };
	}
	if (absDiff > 86400*25) {
		return { duration: Math.round(diff/(86400*30)), unit: 'months' };
	}
	if (absDiff > 3600*21) {
		return { duration: Math.round(diff/86400), unit: 'days' };
	}
	if (absDiff > 60*44) {
		return { duration: Math.round(diff/3600), unit: 'hours' };
	}
	if (absDiff > 30) {
		return { duration: Math.round(diff/60), unit: 'minutes' };
	}
	return { duration: diff, unit: 'seconds' };
}

function updateOutput() {
	const selectedDate = new Date(dateInput.valueAsNumber + timeInput.valueAsNumber + new Date().getTimezoneOffset() * 60000);
	console.log(selectedDate);
	const ts = selectedDate.getTime().toString();
	output.value = `<t:${ts.substr(0, ts.length - 3)}:${typeInput.value}>`;

	if (['R'].includes(typeInput.value)) {
		const formatter = new Intl.RelativeTimeFormat(navigator.language || 'en', typeFormats[typeInput.value] || {});
		const format = automaticRelativeDifference(selectedDate);
		preview.textContent = formatter.format(format.duration, format.unit);
	} else {
		const formatter = new Intl.DateTimeFormat(navigator.language || 'en', typeFormats[typeInput.value] || {});
		preview.textContent = formatter.format(selectedDate);
	}
}

TimestampGenerator.defaultProps = {
    keywords: 'javahound, furry, vr, vrfurry, vr furry, content creation, web development, programming, discord, dc, timestamps, dc timestamps, discord timestamps, timestamp, dc timestamp, discord timestamp',
    description: "This is just a simple Timestamp Generator for Discord. It's a simple way to create those sweet dynamic timestamps for your Discord Guild.",
  }

export default TimestampGenerator;