FROM node:18.16.1 as builder

# 작업 폴더를 만들고 npm 설치
WORKDIR /app
# ENV PATH c/DockerHome/caring-note-web/node_modules/.bin:$PATH
COPY package.json ./

RUN npm install --silent

# 소스를 작업폴더로 복사하고 빌드
COPY . .
RUN npm run build

FROM nginx:stable-alpine

# nginx의 기본 설정을 삭제하고 앱 소스에서 설정한 파일을 복사
# RUN rm -rf /etc/nginx/conf.d
# COPY conf /etc/nginx

# 위에서 생성한 앱의 빌드산출물을 nginx의 샘플 앱이 사용하던 폴더로 이동
COPY --from=builder /app/dist /usr/share/nginx/html

# 80포트 오픈하고 nginx를 백그라운드로 실행
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]