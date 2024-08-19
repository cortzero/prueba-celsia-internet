# Dockerfile for the API
FROM openjdk:17-alpine
COPY ./target/*.jar /api/
WORKDIR /api
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "api-0.0.1-SNAPSHOT.jar"]