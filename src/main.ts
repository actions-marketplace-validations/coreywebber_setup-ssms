import * as core from '@actions/core'
import * as fs from 'fs'
import * as path from 'path'

const IS_WINDOWS = process.platform === 'win32'

async function run(): Promise<void> {
  try {
    // exit if non Windows runner
    if (IS_WINDOWS === false) {
      core.setFailed('setup-ssms can only be run on Windows runners')
      return
    }
    // test paths
    let toolPath = 'C:\\Program Files (x86)\\Microsoft SQL Server Management Studio 18\\Common7\\IDE'
    if (!fs.existsSync(toolPath)) { 
      let toolPath = 'C:\\Program Files (x86)\\Microsoft SQL Server\\140\\Tools\\Binn\\ManagementStudio'
      if (!fs.existsSync(toolPath)) { 
        core.setFailed('Unable to find Microsoft SQL Server Management Studio path.')
      } 
    }
    // extract the folder location for the tool
    const toolFolderPath = path.dirname(toolPath)
    // set the outputs for the action to the folder path of msbuild
    core.setOutput('ssmsPath', toolFolderPath)
    // add tool path to PATH
    core.addPath(toolFolderPath)
    core.info(`Tool path added to PATH: ${toolFolderPath}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
