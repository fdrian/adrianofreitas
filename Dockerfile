# Usa a imagem oficial do NGINX como base
FROM nginx:alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/share/nginx/html

# Remove arquivos padrão do NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do site com permissões corretas
COPY --chown=nginx:nginx . .

# Copia a configuração personalizada do NGINX
COPY nginx.conf /etc/nginx/nginx.conf

# Expõe a porta 80
EXPOSE 80

# Inicia o servidor NGINX
CMD ["nginx", "-g", "daemon off;"]
