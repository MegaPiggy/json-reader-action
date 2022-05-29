import * as core from '@actions/core'
import fs from 'fs'
import util from 'util'

async function run(): Promise<void> {
  try {
    const filePath = core.getInput('path')
    const property = core.getInput('property')
    const encoding = core.getInput('encoding')
    const readFile = util.promisify(fs.readFile)
    const contents = await readFile(filePath, encoding)
    const contentsString = contents
      .toString()
      .trim()
      .replace('\u200B', '')
    core.info(`File contents:\n${contentsString}`)
    core.setOutput('contents', contentsString)
    const json = JSON.parse(contentsString)
    core.info(`Getting ${property}`)
    for (const key in json) {
      core.info(`key: ${key}, value: ${json[key]}`)
      core.setOutput(key, json[key])
      if (key === property) {
        core.info(`Value: ${json[key]}`)
        core.setOutput('value', json[key])
      }
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
