node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Build Docker test'){
     sh 'docker build -t node-test -f Dockerfile.test --no-cache .'
    }
    stage('Docker test'){
      sh 'docker run --rm node-test'
    }
    stage('Clean Docker test'){
      sh 'docker rmi node-test'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker build -t node-app --no-cache .'
        sh 'docker tag node-app localhost:8000/node-app'
        sh 'docker push localhost:8000/node-app'
        sh 'docker rmi -f node-app localhost:8000/node-app'
      }
    }
  }
  catch (err) {
    throw err
  }
}