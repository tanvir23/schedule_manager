step 1:
  create react-native app with $react-native init app_name
step :
  initialize git
    $ cd app_name && git init
    $ git add .
    $ git commit -m "Initial commit"
    $ git remote add origin user@giturl.com/repo.git
    $ git push -u origin master
step 2:
  install redux deps
  $ yarn add redux react-redux -E
step 3:
  add reducer and combined reducer files
  $ mkdir -p src/reducer
  $ cd src/reducer
  $ touch index.js myreducer.js mydata.json
  $ cd ..
step 4:
  add component for react inside src
  $ mkdir views
  $ touch views/MyComponent.js
step 5:
  add reducer code
step :
  add component and make redux state map to props
  see example https://github.com/tanvir23/basic_redux.git commits
