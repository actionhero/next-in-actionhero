exports['default'] = {
  routes: (api) => {
    return {
      get: [
        { path: '/status', action: 'status' },
        { path: '/time', action: 'time' },
        { path: '/showDocumentation', action: 'showDocumentation' },
        { path: '/createChatRoom', action: 'createChatRoom' },

        { path: '/', matchTrailingPathParts: true, action: 'render' }
      ]
    }
  }
}
