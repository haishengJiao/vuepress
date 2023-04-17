module.exports = {
  '/html/': [
    'html'
  ],
  '/test/': [
    'test01',
    'test02',
    {
      text: 'Guide',
      children: ['/test/test03.md', '/test/test04.md', '/test/test05.md'],
    },
    'test04',
  ],
  '/js/': [
    'js01'
  ],
  '/vue/': [
    'vue01',
    'vue02',
    'vue03'
  ]
}