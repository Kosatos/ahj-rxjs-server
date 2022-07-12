const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');

const Router = require('koa-router');
const router = new Router();

const cors = require('koa-cors');
const { v4: uuid } = require('uuid');
const { faker } = require('@faker-js/faker');
const app = new Koa();

app.use(cors());

app.use(
	koaBody({
		urlencoded: true,
		multipart: true,
		json: true,
	})
);

app.use(
	cors([
		{
			allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
		},
	])
);
// const postsId = [uuid(), uuid(), uuid(), uuid(), uuid(), uuid(), uuid(), uuid(), uuid(), uuid(), uuid(), uuid(), uuid(), uuid()]
// const posts = [
// 	{
// 		id: postsId[0],
// 		post_id: uuid(),
// 		aurhor_id: faker.lorem.words(),
// 		author: faker.name.findName(),
// 		avatar: faker.internet.avatar(),
// 		content: faker.image.image(),
// 		created: new Date(faker.date.recent(10)).getTime(),
// 	},
// 	{
// 		id: postsId[1],
// 		post_id: uuid(),
// 		aurhor_id: faker.lorem.words(),
// 		author: faker.name.findName(),
// 		avatar: faker.internet.avatar(),
// 		content: faker.image.image(),
// 		created: new Date(faker.date.recent(10)).getTime(),
// 	},
// 	{
// 		id: postsId[2],
// 		post_id: uuid(),
// 		aurhor_id: faker.lorem.words(),
// 		author: faker.name.findName(),
// 		avatar: faker.internet.avatar(),
// 		content: faker.image.image(),
// 		created: new Date(faker.date.recent(10)).getTime(),
// 	},
// 	{
// 		id: postsId[3],
// 		post_id: uuid(),
// 		aurhor_id: faker.lorem.words(),
// 		author: faker.name.findName(),
// 		avatar: faker.internet.avatar(),
// 		content: faker.image.image(),
// 		created: new Date(faker.date.recent(10)).getTime(),
// 	},
// 	{
// 		id: postsId[4],
// 		post_id: uuid(),
// 		aurhor_id: faker.lorem.words(),
// 		author: faker.name.findName(),
// 		avatar: faker.internet.avatar(),
// 		content: faker.image.image(),
// 		created: new Date(faker.date.recent(10)).getTime(),
// 	},
// 	{
// 		id: postsId[5],
// 		post_id: uuid(),
// 		aurhor_id: faker.lorem.words(),
// 		author: faker.name.findName(),
// 		avatar: faker.internet.avatar(),
// 		content: faker.image.image(),
// 		created: new Date(faker.date.recent(10)).getTime(),
// 	},
// 	{
// 		id: postsId[6],
// 		post_id: uuid(),
// 		aurhor_id: faker.lorem.words(),
// 		author: faker.name.findName(),
// 		avatar: faker.internet.avatar(),
// 		content: faker.image.image(),
// 		created: new Date(faker.date.recent(10)).getTime(),
// 	},
// 	{
// 		id: postsId[7],
// 		post_id: uuid(),
// 		aurhor_id: faker.lorem.words(),
// 		author: faker.name.findName(),
// 		avatar: faker.internet.avatar(),
// 		content: faker.image.image(),
// 		created: new Date(faker.date.recent(10)).getTime(),
// 	},
// 	{
// 		id: postsId[8],
// 		post_id: uuid(),
// 		aurhor_id: faker.lorem.words(),
// 		author: faker.name.findName(),
// 		avatar: faker.internet.avatar(),
// 		content: faker.image.image(),
// 		created: new Date(faker.date.recent(10)).getTime(),
// 	},
// 	{
// 		id: postsId[9],
// 		post_id: uuid(),
// 		aurhor_id: faker.lorem.words(),
// 		author: faker.name.findName(),
// 		avatar: faker.internet.avatar(),
// 		content: faker.image.image(),
// 		created: new Date(faker.date.recent(10)).getTime(),
// 	},
// 	{
// 		id: postsId[10],
// 		post_id: uuid(),
// 		aurhor_id: faker.lorem.words(),
// 		author: faker.name.findName(),
// 		avatar: faker.internet.avatar(),
// 		content: faker.image.image(),
// 		created: new Date(faker.date.recent(10)).getTime(),
// 	},
// 	{
// 		id: postsId[11],
// 		post_id: uuid(),
// 		aurhor_id: faker.lorem.words(),
// 		author: faker.name.findName(),
// 		avatar: faker.internet.avatar(),
// 		content: faker.image.image(),
// 		created: new Date(faker.date.recent(10)).getTime(),
// 	},
// 	{
// 		id: postsId[12],
// 		post_id: uuid(),
// 		aurhor_id: faker.lorem.words(),
// 		author: faker.name.findName(),
// 		avatar: faker.internet.avatar(),
// 		content: faker.image.image(),
// 		created: new Date(faker.date.recent(10)).getTime(),
// 	},
// 	{
// 		id: postsId[13],
// 		post_id: uuid(),
// 		aurhor_id: faker.lorem.words(),
// 		author: faker.name.findName(),
// 		avatar: faker.internet.avatar(),
// 		content: faker.image.image(),
// 		created: new Date(faker.date.recent(10)).getTime(),
// 	},
// ]

router.get('/messages/unread', async (ctx) => {
	ctx.response.status = 200;
	ctx.response.body = JSON.stringify({
		status: 'ok',
		timestamp: 1553400000,
		messages: Array.from({ length: Math.floor(Math.random() * 10 + 1) }, () => {
			return {
				id: uuid(),
				from: faker.internet.email(),
				subject: faker.company.companyName(),
				body: faker.lorem.paragraph(),
				received: new Date(faker.date.recent(10)).getTime(),
			};
		}),
	});
});

router.get('/posts/latest', async (ctx) => {
	ctx.response.status = 200;
	ctx.response.body = JSON.stringify({
		status: 'ok',
		timestamp: 1553400000,
		posts: Array.from({ length: Math.floor(Math.random() * 10 + 1) }, () => {
			return {
				id: uuid(),
				author_id: uuid(),
				title: faker.lorem.words(),
				author: faker.name.findName(),
				avatar: faker.internet.avatar(),
				image: faker.image.image(),
				created: new Date(faker.date.recent(10)).getTime(),
			};
		}),
	});
});

router.get('/posts/:post_id/comments/latest', async (ctx) => {
	ctx.response.status = 200;
	ctx.response.body = JSON.stringify({
		status: 'ok',
		timestamp: 1553400000,
		comments: Array.from({ length: Math.floor(Math.random() * 3 + 1) }, () => {
			return {
				id: uuid(),
				post_id: ctx.params.post_id,
				aurhor_id: uuid(),
				author: faker.name.findName(),
				avatar: faker.internet.avatar(),
				content: `${faker.internet.emoji()} ${faker.internet.emoji()} ${faker.internet.emoji()}`,
				created: new Date(faker.date.recent(10)).getTime(),
			};
		}),
	});
});

app.use(router.routes());
app.use(router.allowedMethods());

const server = http.createServer(app.callback()).listen(7070);
