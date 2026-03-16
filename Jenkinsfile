pipeline {
    agent any

    tools {
        nodejs 'NodeJS 25'
    }

    environment {
        // On récupère la clé API cachée en sécurité dans Jenkins
        RESEND_API_KEY = credentials('RESEND_API_KEY_SECRET')
    }

    stages {
        stage('Récupération du code') {
            steps {
                checkout scm
            }
        }

        stage('Installation des dépendances') {
            steps {
                sh 'npm install'
            }
        }

        stage('Tests Unitaires & Validation') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Tests E2E') {
            steps {
                sh 'npm run test:e2e'
            }
        }
    }

    post {
        success {
            echo '✅ Tous les tests sont passés avec succès !'
        }
        failure {
            echo '❌ Échec de la pipeline.'
        }
    }
}