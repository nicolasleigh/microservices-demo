.PHONY: post-build post-run

post-build:
	@cd posts && docker build -t nicolas/post/node:20 .
post-run:
	@docker run --name post -it --rm nicolas/post/node:20
	
query-build:
	@cd query && docker build -t nicolas/query/node:20 .
query-run:
	@docker run --name query -it --rm nicolas/query/node:20

moderation-build:
	@cd moderation && docker build -t nicolas/moderation/node:20 .
moderation-run:
	@docker run --name moderation -it --rm nicolas/moderation/node:20

event-bus-build:
	@cd event-bus && docker build -t nicolas/event-bus/node:20 .
event-bus-run:
	@docker run --name event-bus -it --rm nicolas/event-bus/node:20

comment-build:
	@cd comments && docker build -t nicolas/comment/node:20 .
comment-run:
	@docker run --name comment -it --rm nicolas/comment/node:20

client-build:
	@cd client && docker build -t nicolas/client/node:20 .
client-run:
	@docker run --name client -it --rm nicolas/client/node:20