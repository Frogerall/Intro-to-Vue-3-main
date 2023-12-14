app.component("review-form", {
 template:
  /*html*/
  `
<form action="" class="review-form" @submit.prevent="onSubmit">
  <h3>Leave a review</h3>
  <label for="name">Name:</label>
  <input type="text" id="name" v-model="name">
  <label for="review">Review:</label>
  <textarea name="" id="review" cols="30" rows="10" v-model="review"></textarea>
<label for="rating">Rating:</label>
<select name="" id="rating" v-model.number="rating">
  <option>5</option>
  <option>4</option>
  <option>3</option>
  <option>2</option>
  <option>1</option>
</select>
<br/>
 <label for="recommend">Would you recommend this product?</label>
<input type="text" id="recommend" v-model="recommend">
<input type="submit" value="submit" class="button">

</form>
`,
 data() {
  return {
   name: "",
   review: "",
   rating: null,
   recommend: "",
  };
 },
 methods: {
  onSubmit() {
   if (this.name === "" || this.review === "" || this.rating === null) {
    alert("Please complete the form");
    return;
   }
   let productReview = {
    name: this.name,
    review: this.review,
    rating: this.rating,
    recommend: this.recommend,
   };
   this.$emit("review-submitted", productReview);

   this.name = "";
   this.review = "";
   this.rating = null;
   this.recommend = "";
  },
 },
});
