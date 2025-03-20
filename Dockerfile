# Usa a imagem oficial do NGINX como base
FROM nginx:alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/share/nginx/html

# Remove arquivos padrão do NGINX
RUN rm -rf ./*

# Copia os arquivos do site para o contêiner
COPY . .

# Expõe a porta 80
EXPOSE 80

# Inicia o servidor NGINX
CMD ["nginx", "-g", "daemon off;"]
