<template>
  <section class="callout secondary">
			<h5 class="text-center">Filter by Category</h5>
			<!-- <form>
				<div class="row">
					<div class="large-6 columns">
						<select v-model="section">
							<option v-for="section in sections" :value="section">{{ section }}</option>
						</select>
					</div>
					<div class="medium-6 columns">
						<a @click="getPosts(section)" class="button expanded">Retrieve</a>
					</div>
				</div>
			</form> -->
		</section>
</template>

<script>
export default {
  name: 'Title'
}
</script>
