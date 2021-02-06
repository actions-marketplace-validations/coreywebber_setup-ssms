# coreywebber/setup-ssms
This adds the path to SSMS into PATH and allows you to call the utilities like Microsoft.AnalysisServices.Deployment in order to deploy order to deploy SSAS projects. It will require however that SQL Server Management Studio v18 or v17 be installed on the machine where the runner is hosted.

## Usage

```yml
- name: Add Microsoft.AnalysisServices.Deployment to PATH
  uses: coreywebber/setup-ssms@v1
```

## Building this repo
As with most GitHub Actions, this requires NodeJS development tools.  After installing NodeJS, you can build this by executing:

```bash
npm install
npm run build
npm run pack
```

which will modify/create the /dist folder with the final index.js output
