pipeline {
  agent { dockerfile true }
  stages {
    stage('Clonning Git') {
      steps {
        git 'https://github.com/davidlruizc/docker-project'
      }
    }
    stage('Test') {
      steps {
        sh 'node --version'
      }
    }
  }
}