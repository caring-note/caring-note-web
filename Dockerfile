FROM node:18.16.1 as builder

# 작업 폴더를 만들고 npm 설치
WORKDIR /app
COPY package*.json ./
RUN npm install

# 소스를 작업폴더로 복사하고 빌드 
COPY . .
RUN npm run build

# 2. Nginx 스테이지
FROM nginx:stable-alpine

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 빌드된 정적 파일 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# 80포트 오픈하고 nginx를 백그라운드로 실행
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
