pipeline {
  agent {
    docker {
      image 'node:10'
      args '-p 8000:8000'
    }
  }
  stages {
    stage('Clonning Git') {
      steps {
        git 'https://github.com/davidlruizc/docker-project'
      }
    }
    stage('Build') {
      steps {
        sh 'ls -lac'
        sh 'pwd'
      }
    }
  }
}