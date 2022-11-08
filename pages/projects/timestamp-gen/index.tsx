import React, { useEffect } from "react"
import useState from 'react-usestateref'
import Notiflix from "notiflix"
import Head from "next/head"
import styles from '../../../styles/Timestamp.module.css'

var startDate = new Date()
var date = new Date(startDate.getTime() + 60000)
var valueDate = new Date().toISOString().split('T')[0]
var valueTime = new Date(date.getTime() + 60000).toISOString().split('T')[1].split('.')[0].slice(0, -3)
var outPreview

const TimestampGenerator = ({ keywords, description }) => {
    var [select,setSelect] = useState('R')
    var [timeIn, setTime] = useState(valueTime)
    var [dateIn, setDate] = useState(valueDate)
    var [output , setOutput] = useState('')
    var result

    var newDate
    function changeTime(e) {
        setTime(e.target.value)
        timeIn = e.target.value
        buildDate();
    }

    function changeDate(e) {
        setDate(e.target.value)
        dateIn = e.target.value
        buildDate()
    }

    function changeSelect(e) {
        setSelect(e.target.value)
        select = e.target.value
        updateOutput()
    }

    function buildDate() {
        newDate = new Date(dateIn + "T" + timeIn + ":00")
        date = newDate.toISOString()
        updateOutput()
    }

    function updateOutputPreview() {
        if (select == 't') {
            outPreview = timeIn
        }
        if (select == 'T') {
            outPreview = timeIn + ":00"
        }
        if (select == 'd') {
            var parts = dateIn.split('-')
            var dateParts = parts[1] + "/" + parts[2] + "/" + parts[0]
            outPreview = dateParts
        }
        if (select == 'D') {
            var newLongDate = new Date(dateIn + "T" + timeIn + ":00")
            var longDate = new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(newLongDate)
            outPreview = longDate
        }
        if (select == 'f') {
            var parts = dateIn.split('-')
            var newLongDate = new Date(dateIn + "T" + timeIn + ":00")
            var dateTime = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }).format(newLongDate)
            outPreview = dateTime
        }
        if (select == 'F') {
            var parts = dateIn.split('-')
            var newLongDate = new Date(dateIn + "T" + timeIn + ":00")
            var dateTime = new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }).format(newLongDate)
            outPreview = dateTime
        }
        if (select == 'R') {
            var diff = automaticRelativeDifference(date)
            outPreview = "in " + diff.duration + " " + diff.unit
        }  
    }   

    function updateOutput() {
        updateOutputPreview()
        const test = new Date(dateIn + "T" + timeIn + ":00")
        const selectedDate = new Date(test.valueOf())
        const ts = selectedDate.getTime().toString()
        result = `<t:${ts.substring(0, ts.length - 3)}:${select}>`
        setOutput(result)
    }

    function copy() {
        const test = new Date(dateIn + "T" + timeIn + ":00")
        const selectedDate = new Date(test.valueOf())
        const ts = selectedDate.getTime().toString()
        result = `<t:${ts.substring(0, ts.length - 3)}:${select}>`
        setOutput(result)
        navigator.clipboard.writeText(result.toString())
        Notiflix.Notify.success('Copied to clipboard.')
    }

    function automaticRelativeDifference(valueDate) {
        var d = new Date(valueDate)
        const diff = -((new Date().getTime() - d.getTime())/1000)|0;
        const absDiff = Math.abs(diff);
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

    updateOutputPreview()

    return (
        <>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <div className="min-w-full h-screen text-center">
            <Head>
                <title>Timestamp Gen - Javahound</title>
                <meta
                    name="Discord Timestamp Generator"
                    content="Generate dynamic Discord timestamps with ease :3"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className={styles.main}>
                    <div className={styles.alignment}>
                        <div className={styles.container}>
                            <h1 className="gradientText">DC Timestamp Generator</h1>
                            <div className={styles.form_row} id="dateIn">
                                <p>Date:</p>
                                <input type="date" id="date" value={dateIn} data-date-format className={styles.input}
                                        onChange={(e) => { setDate(e.target.value); changeDate(e); updateOutput;}}  />
                            </div>
                            <div className={styles.form_row} id="timeIn">
                                <p>Time:</p>
                                <input type="time" id="time" value={timeIn} className={styles.input}
                                        onChange={(e) => {setTime(e.target.value); changeTime(e); updateOutput;}} />
                            </div>
                            <div className={styles.form_row}>
                                <p>Format:</p>
                                <select name="type" id="type" value={select} defaultValue='R'
                                        onChange={ (e) => {setSelect(e.target.value); changeSelect(e); updateOutput();}} className={styles.input} >
                                    <option value="t">Short Time</option>
                                    <option value="T">Long Time</option>
                                    <option value="d">Short Date</option>
                                    <option value="D">Long Date</option>
                                    <option value="f">Long Date + Time</option>
                                    <option value="F">Day + Date + Time</option>
                                    <option value="R" selected>Relative</option>
                                </select>
                            </div>
                            <div className={styles.out_pre}>
                                <p>Output preview (24h):</p>
                                <p id="outPreview" className="right bg-[#40444b] min-w-fit py-2 px-2 rounded-md">{outPreview}</p>
                            </div>
                            <h2 className="gradientText">Output</h2>
                        </div>
                    </div>
                </div>
            </main>
                <div>
                    <div>
                        <div>
                            <div className="md:flex ">
                                <div className="-mt-4 mb-4 px-4 xs:px-8 max-w-[1200px]">
                                    <div className="xsm:flex my-2 mx-2">
                                        <p className="xsm:text-left left w-full py-2 px-4">Output Preview (24h)</p>
                                        <p id="outPreview" className="right bg-[#40444b] min-w-fit py-2 px-2 rounded-md">{outPreview}</p>
                                    </div>
                                    <h2 className="mt-12 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7] gradient-move">Output</h2>
                                    <div className="flex">
                                        <input type="text" value={output} name="" id="" className="right bg-[#22212b] w-[70%] py-2 px-4 rounded-3xl mx-auto" />
                                        <button className="w-[20%] shadow-transparent mx-auto bg-gradient-to-r from-[#4856a8] to-[#8b5cb8]" onClick={copy}>Copy</button>
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


TimestampGenerator.defaultProps = {
    keywords: 'javahound, furry, vr, vrfurry, vr furry, content creation, web development, programming, discord, dc, timestamps, dc timestamps, discord timestamps, timestamp, dc timestamp, discord timestamp',
    description: "This is just a simple Timestamp Generator for Discord. It's a simple way to create those sweet dynamic timestamps for your Discord Guild.",
}

export default TimestampGenerator;