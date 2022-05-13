# Imagem que eu quero iniciar no meu docker
FROM node

# Diretório onde que vou armazenar os dados para poder rodar dentro do docker
WORKDIR /usr/app

# Copiando o package.json para o diretório criado
COPY package.json ./

# Despois de copiado, ira executar o comando para baixar os pacotes
RUN npm install

# Copiando todos os arquivos do projeto
COPY . .

# Porta que o docker ira usar
EXPOSE 3333

# Comandos para inicializar o projeto
CMD ["npm", "run", "dev"]


# Comando de listagem de todos os containers rodando
# docker ps -a

# Comando para remover o container
# docker rm id_do_container

# Comando para iniciar a imagem
# docker start id_do_container

# Comando para iniciar parar a imagem
# docker stop id_do_container

# Comando para iniciar a imagem no projeto
# docker build -t nome_da_imagem .

# Comando para executar a imagem no docker
# docker run -p 3333:3333 rentx

# Comando para ver os arquivos que o docker está rodando
# docker exec -it nome_do_container /bin/bash

# Comando para inicializar o docker compose
# Com o -d ele ficar operante mesmo com a morte do terminal

# docker-compose up -d

# Comando para parar o docker compose 
# docker-compose stop

# Comando para remover tudo que foi criado
# docker-compose down

# Comando para inicializar o docker compose 
# docker-compose start