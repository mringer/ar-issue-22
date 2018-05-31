"use strict";
import * as apolloResolvers from 'apollo-resolvers'
export const baseResolver = apolloResolvers.createResolver(
	null,
	(root, args, context, error) => error,
)