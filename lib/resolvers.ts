import { QueryResolvers, MutationResolvers } from './schemas/type-defs.graphqls'
import { ResolverContext } from './apollo'

const userProfile = {
  id: String(1),
  name: 'John Smith',
  status: 'cached',
}
const news = {
  id: String(1),
  title: 'New era is about to begin',
}

const Query: Required<QueryResolvers<ResolverContext>> = {
  viewer(_parent, _args, _context, _info) {
    return userProfile
  },
  news(_parent, _args, _context, _info) {
    return news
  },
}


const Mutation: Required<MutationResolvers<ResolverContext>> = {
  updateName(_parent, _args, _context, _info) {
    userProfile.name = _args.name
    return userProfile
  },
}

export default { Query, Mutation }
