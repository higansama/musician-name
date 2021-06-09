pipeline{
    agent any
    stages{
        stage("build"){
            steps{
                echo 'Install the dependencies'
                sh 'npm i'
            }
        }
        stage("test"){
            steps{
                echo 'Testing the apps'   
                sh 'npm test'
            }
        }
        stage("deploy"){
            steps{
                echo 'Testing the apps'   
                sh 'npm test'
            }
        }
    }
}