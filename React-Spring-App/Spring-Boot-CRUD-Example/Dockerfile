FROM maven AS mavenapp
WORKDIR /app

COPY . /app
RUN mvn install -DskipTests


FROM openjdk:19-jdk-alpine3.15
ARG JAR_FILE=Spring-Boot-CRUD-Example-0.0.1-SNAPSHOT.jar

WORKDIR /app
COPY --from=mavenapp /app/target/${JAR_FILE} /app/
ENTRYPOINT [ "java", "-jar", "Spring-Boot-CRUD-Example-0.0.1-SNAPSHOT.jar" ]

EXPOSE 8089