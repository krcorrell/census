git add .
read -p "Commit description: " desc
git commit -m "$desc"
git remote add origin git@github.com:krcorrell/census.git
git push -u origin master