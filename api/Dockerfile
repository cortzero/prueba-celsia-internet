# Dockerfile for the API
FROM openjdk:17-alpine
COPY ./target/*.jar /api/
WORKDIR /api
ENTRYPOINT ["java", "-jar", "api-0.0.1-SNAPSHOT.jar"]