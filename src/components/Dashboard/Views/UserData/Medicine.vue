<template>
  <card class="card-medicine container-fluid">
      <h4 class="card-title">Medicine</h4>
      <div class="accordion" id="accordionExample">
          <div class="accordion-card">
              <div class="card-header" id="headingOne">
                      <button type="button" data-toggle="collapse" class="row" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <span class="col-sm date">12/10/2018</span>
                          <span class="col-sm doctor-type">Surgeon</span>
                          <span class="col-sm doctor-name">Daniel Wilson</span>
                      </button>
              </div>
              <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
              </div>
          </div>
          <div class="accordion-card">
              <div class="card-header" id="headingTwo">
                      <button class="row" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <span class="col-sm date">12/10/2018</span>
                          <span class="col-sm doctor-type">Surgeon</span>
                          <span class="col-sm doctor-name">Daniel Wilson</span>
                      </button>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
              </div>
          </div>
          <div class="accordion-card">
              <div class="card-header" id="headingThree">
                      <button class="row" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <span class="col-sm date">12/10/2018</span>
                          <span class="col-sm doctor-type">Surgeon</span>
                          <span class="col-sm doctor-name">Daniel Wilson</span>
                      </button>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
              </div>
          </div>
      </div>
  </card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  export default {
    components: {
      Card
    },
    mounted: function() {
      //TODO:
    },
    data: function() {
      return {
        cards: []
      };
    }
  }

</script>
<style>

</style>
