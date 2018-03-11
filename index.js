'use strict'

const fs = require('fs')
const csvSync = require('csv-parse/lib/sync')
const googlehome = require('google-home-notifier')

const file = 'data.csv'

googlehome.device('', 'ja')
googlehome.ip('192.168.xxx.xxx')

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const main = async () => {
	const data = fs.readFileSync(file)
	for (const line of csvSync(data)) {
		console.log(line)
		googlehome.notify(line[0], res => {})
		await sleep(line[1])
	}
}
main()
