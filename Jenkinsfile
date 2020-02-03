pipeline {
  agent {
    docker {
      image 'node:10'
      args '-p 8000:8000'
    }
  }
  environment {
    HOME = '.'
  }
  stages {
    stage('Clonning Git') {
      steps {
        git 'https://github.com/davidlruizc/docker-project'
      }
    }
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run start'
      }
    }
  }
}