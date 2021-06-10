pipeline{
    agent any
    stages{
        stage("test"){
            steps{
                echo 'Testing the apps'   
                sh 'docker build -t test-image:latest --target test .'
                sh 'docker run -i --rm -p 3000:3000 test-image:latest '
            }
        }
        stage("deploy"){
            steps{
                sh 'docker rmi test-image:latest'
                echo 'Deploy the apps'   
                sh 'docker build -t prod-image --target prod .'
                sh 'docker container create --name musician -p 3000:3000 prod-image:latest'
                sh 'docker container start musician'
                sh 'docker ps'
            }
        }
    }
}