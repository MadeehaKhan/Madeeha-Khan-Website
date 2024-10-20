FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /App
COPY ./ ./
RUN dotnet restore

#COPY Madeeha-Khan-Website/. ./app/
#WORKDIR /source/app
ENV NODE_VERSION=20.18.0
RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version
RUN mkdir -p ~/.aspnet/https
RUN dotnet publish -c release -o /app --no-restore
RUN ls -l

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app .