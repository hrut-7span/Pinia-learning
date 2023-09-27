<template>
  <div>
    <input
      type="checkbox"
      id="first-quarter"
      name="quarter"
      value="Jan-Mar"
      @change="getChecked"
    />
    <label for="scales">Jan-March</label>
  </div>

  <div>
    <input
      type="checkbox"
      id="second-quarter"
      name="quarter"
      value="Apr-Jun"
      @change="getChecked"
    />
    <label for="horns">April-June</label>
  </div>

  <div>
    <input
      type="checkbox"
      id="third-quarter"
      name="quarter"
      value="Jul-Sep"
      @change="getChecked"
    />
    <label for="horns">July-September</label>
  </div>

  <div>
    <input
      type="checkbox"
      id="fourth-quarter"
      name="quarter"
      value="Oct-Dec"
      @change="getChecked"
    />
    <label for="horns">October-December</label>
  </div>
  <!-- <div class="bg-gray-400 px-4 py-2 w-28 rounded">
    <button>Filter Blogs</button>
  </div> -->

  <div v-for="(blog, index) in data" :key="index">
    <div class="mt-5">
      <h1>Title:{{ blog.title }}</h1>
      <h2>Slug:{{ blog.slug }}</h2>
      <h2>Decription: {{ blog.description }}</h2>
      <h2>Content: <span v-html="blog.content"></span></h2>
      <h2>Published Date: {{ formatDate(blog.published_date) }}</h2>
      <h2>Yearly Quarter: {{ blog.yearly_quarter }}</h2>
    </div>
  </div>

  <!-- <nuxt-link :to="`http://localhost:8055/items/blogs/${data[0].id}`"
    >Click here</nuxt-link
  > -->

  <!-- <Header />
  <NuxtPage /> -->
</template>

<script setup>
const values = reactive([]);
let filter = null;
if (values) {
  filter = {
    yearly_quarter: {
      _in: values,
      // _in: ["Jan-Mar", "Apr-Jun", "Jul-Sep", "Oct-Dec"],
    },
  };
}

const { getItems } = useDirectusItems();
const { data } = await useAsyncData(
  "blogs",
  () => {
    return getItems({
      collection: "blogs",
      params: {
        fields: [
          "id",
          "slug",
          "title",
          "description",
          "published_date",
          "tags",
          "content",
          "yearly_quarter",
        ],

        filter: {
          ...filter,
        },
      },
    });
  },
  {
    watch: [values],
  }
);

const getChecked = () => {
  var checkboxes = document.querySelectorAll('input[name="quarter"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      if (!values.includes(checkbox.value)) {
        values.push(checkbox.value);
      }
    } else {
      const index = values.indexOf(checkbox.value);
      if (index !== -1) {
        values.splice(index, 1);
      }
    }
  });
  // for (var i = 0; i < checkboxes.length; i++) {
  //   if (
  //     checkboxes[i].checked == true &&
  //     !values.includes(checkboxes[i].value)
  //   ) {
  //     values.push(checkboxes[i].value);
  //   }
  // }
  console.log("Values", values);
};
</script>
<!-- 
if (values[0] === "Jan-Mar") { quarterFilter.value = "Jan-Mar"; } else if
(values[0] === "Apr-Jun") { quarterFilter.value = "Apr-Jun"; } else if
(values[0] === "Jul-Sep") { quarterFilter.value = "Jul-Sep"; } else {
quarterFilter.value = "Oct-Dec"; } -->

<!-- for (var i = 0; i < values.length; i++) {
  if (values[i] === "Jan-Mar") {
    lowerMonth.value = 1;
    upperMonth.value = 3;
  } else if (values[i] === "Apr-Jun") {
    lowerMonth.value = 4;
    upperMonth.value = 6;
  } else if (values[i] === "Jul-Sep") {
    lowerMonth.value = 7;
    upperMonth.value = 9;
  } else {
    lowerMonth.value = 10;
    upperMonth.value = 12;
  }
} -->

<!-- const lowerMonth = ref(0);
const upperMonth = ref(0); -->
<!-- 
_and: [
          {
            "month(published_date)": {
              _gte: 1,
            },
          },
          {
            "month(published_date)": {
              _lte: 10,
            },
          },
          {
            status: {
              _eq: "published",
            },
          },
        ], -->

<!-- const getQuarter = (dateStr) => {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1;
  if (month >= 1 && month <= 3) {
    return "Jan-Mar";
  } else if (month >= 4 && month <= 6) {
    return "Apr-Jun";
  } else if (month >= 7 && month <= 9) {
    return "Jul-Sep";
  } else {
    return "Oct-Dec";
  }
}; -->

<!-- Language Translations -->
<!-- params: {
  fields: ["translations.*"],
  - To get data for a specific language
  deep: { translations: { _filter: { languages_code: { _eq: "fr-FR" } } } },
  
  - To get all the languages data array 
  filter: {
    translations: {
      languages_code: { _eq: "en-US" },
    },
  },
  limit: 1,
}, -->
