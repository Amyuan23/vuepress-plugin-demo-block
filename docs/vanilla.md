# Vanilla Demo

```html
::: demo [vanilla]
```html
<html>
  <div id="vanilla-box" onclick="someFunction()"></div>
</html>
<script>
  function someFunction() {
    console.log('hello world');
    alert('hello world');
  }
  var box = document.getElementById('vanilla-box')
  box.innerHTML = 'Hello World!'
</script>
<style>
#vanilla-box {
  color: red;
}
</style>
` ` `
:::
```

::: demo [vanilla]
```html
<html>
  <div id="vanilla-box" onclick="someFunction()"></div>
</html>
<script>
  function someFunction() {
    console.log('hello world');
    alert('hello world');
  }
  var box = document.getElementById('vanilla-box')
  box.innerHTML = 'Hello World!'
</script>
<style>
#vanilla-box {
  color: red;
}
</style>
```
:::
