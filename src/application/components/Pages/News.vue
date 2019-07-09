<template>
  <div class="page news">
    <div class="icon">
      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyMTU4IiB2aWV3Qm94PSIwIDAgMjU2IDIyMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOCAwIDBoOTcuOTJMMTI4IDUxLjIgMTU3LjQ0IDBoNDcuMzZ6IiBmaWxsPSIjNDFCODgzIi8+CjxwYXRoIGQ9Ik0wIDBsMTI4IDIyMC44TDI1NiAwaC01MS4yTDEyOCAxMzIuNDggNTAuNTYgMEgweiIgZmlsbD0iIzQxQjg4MyIvPgo8cGF0aCBkPSJNNTAuNTYgMEwxMjggMTMzLjEyIDIwNC44IDBoLTQ3LjM2TDEyOCA1MS4yIDk3LjkyIDBINTAuNTZ6IiBmaWxsPSIjMzU0OTVFIi8+Cjwvc3ZnPgo=" alt="">
    </div>
    <div class="content">
      <h1>News</h1>
      <p>This is just an example and none of the information below will be updated</p>
      <div class="grid">
          <div class="cell">1</div>
          <div class="cell">2</div>
          <div class="cell">3</div>
          <div class="cell">4</div>
          <div class="cell">5</div>
          <div class="cell">6</div>
          <div class="cell">7</div>
          <div class="cell">8</div>
          <div class="cell">9</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }
  .cell{
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(100, 100, 100, 0.8);
    border-radius: 10px;
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }
</style>
