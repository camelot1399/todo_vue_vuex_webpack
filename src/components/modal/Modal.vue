<template>
  <div
    :class="['modal', isModal ? 'active' : '']"
    @click="setIsModal()"
  >
    <div
      :class="['modal__content', isModal ? 'active' : '']"
      @click.stop="stop()"
    >
      <div class="modal__header">
        <Button @onClick="setIsModal()">close</Button>
      </div>
      <div class="modal__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit mollitia modi eveniet quasi delectus dolore, necessitatibus odio vel voluptas asperiores possimus eius ipsa doloribus debitis cumque velit quod ea.
        Eligendi debitis animi eum provident distinctio quibusdam commodi eos maiores! Molestiae saepe quae delectus? Nihil corrupti quo at, eius vitae pariatur harum magni beatae recusandae architecto placeat a ratione ullam!
        Suscipit eveniet, perspiciatis, veniam earum tempore ad cumque deleniti delectus eius velit consectetur repellat facilis porro harum quidem, consequatur ut repudiandae ratione magnam atque sint! Aperiam quo totam beatae nostrum?
        Fuga expedita dolore eveniet sapiente saepe voluptatum voluptate voluptatem? Deleniti earum minima maxime modi sint qui illum amet dicta, distinctio sapiente, beatae consequatur, voluptatum est. Mollitia veniam voluptates eligendi alias!
        Eveniet fugit corporis fuga ratione quibusdam quisquam voluptate debitis molestiae itaque! Harum recusandae nobis accusamus, totam porro iure et ab nisi repudiandae eius eligendi quasi rerum fugit error accusantium consequuntur!
        Cupiditate amet voluptas iste vero, commodi, nihil nemo odit maiores adipisci omnis, exercitationem quae! Veniam numquam in harum architecto perspiciatis perferendis amet similique nulla dolore accusamus, rem libero placeat ullam.
        Rerum quibusdam soluta animi consectetur provident sapiente perspiciatis facere dolores perferendis maiores incidunt possimus in ratione accusantium temporibus, blanditiis magni, ut id dicta earum non fugiat quos numquam iste. Odit!
        Ut recusandae id consequuntur ex rem dolor et nulla repudiandae quisquam doloribus odio numquam illo accusantium sequi aliquid animi obcaecati laboriosam vitae dolores a earum, perferendis sint. Esse, qui ratione.
        Sapiente officiis cum ex laborum eum laboriosam minima, soluta quaerat voluptates nam nesciunt hic voluptas libero voluptatum voluptate? Magni ratione accusantium ipsa laudantium ut repudiandae reiciendis itaque quidem sit voluptates.
        Iusto magnam consectetur accusantium, at mollitia, iure molestias ullam sequi nulla ex animi accusamus optio. Eius rerum excepturi eaque veniam numquam quo itaque quasi omnis assumenda nulla, aliquid repellendus quae.
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Button from '../UI/Button.vue'
export default {
  components: { Button },
  name: 'Modal',
  computed: {
    ...mapGetters(['isModal'])
  },
  methods: {
    ...mapActions(['setIsModal']),
    stop () {
      console.log('click modal')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  opacity: 0;
  z-index: -1;
  background: rgba(1,1,1,0.4);
  pointer-events: none;
  &.active {
    opacity: 1;
    z-index: 2;
    pointer-events: all;
  }

  &__wrapper {
    background: #ccc;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
    z-index: -1;
    transition: all 0.6s;
    cursor: pointer;
    opacity: 0;
    &.active {
      opacity: 1;
      z-index: 2;
    }
  }
  &__content {
    background: white;
    width: 60%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    transition: 0.5s;
    transform: scale(0.5);
    z-index: -1;
    &.active {
      transform: scale(1);
      z-index: 3;
    }
  }
  &__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  &__body {
    font-size: 16px;
    max-height: 300px;
    overflow-y: scroll;
  }
}
</style>
