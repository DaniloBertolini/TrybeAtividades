npm create vite@latest
rm .eslintrc.cjs

// .eslintrc.json{
  "extends": "@trybe/eslint-config-frontend/typescript"}
  
 "scripts": {"lint": "eslint -c .eslintrc.json . --ext .js,.jsx,.ts,.tsx"
 }
 
 // .vscode/settings.json

{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true,
  },
  "extensions.ignoreRecommendations": false,
}
