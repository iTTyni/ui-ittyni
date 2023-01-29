FROM node:16-alpine3.14
WORKDIR /ittyniui
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run storybook
CMD ["npm", "run", "storybook"]