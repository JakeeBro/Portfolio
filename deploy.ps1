# Commit Changes on Branch
git add .
git commit -m "Pre Deploy"
git push

# Ensure we are on Main and Build the Project
git checkout main
ng build

# Make Temp Directory
mkdir ../temp-gh-pages

robocopy ./dist ../temp-gh-pages /E /XD browser
robocopy ./dist/browser ../temp-gh-pages /E

# Duplicate index.html and rename it to 404.html
Copy-Item -Path ../temp-gh-pages/index.html -Destination ../temp-gh-pages/404.html -Force

# Switch to GH Pages Branch
git checkout gh-pages

Get-ChildItem -Path . -Force | Where-Object { @('.angular', '.git', '.idea', 'dist', 'node_modules', '.gitignore') -notcontains $_.Name } | Remove-Item -Recurse -Force

robocopy ../temp-gh-pages . /COPY:DAT /R:0 /W:0

git add .
git commit -m "Deploy"

if (Test-Path ../temp-gh-pages) { Remove-Item -Recurse -Force ../temp-gh-pages }

git push
git checkout main
