<template>
  <header class="h-screen bg-[#fff]">
    <div class="px-3 min-[370px]:px-4 w-full">
      <div
        class="flex items-center py-[38px] pt-[15px] justify-between space-x-4 lg:space-x-6"
      >
        <router-link to="/">
          <img
            loading="lazy"
            src="@/assets/BrandLogos/talent-olympics-marketplace_logo.png"
            class="h-[15px] md:h-[20.421px] w-auto object-cover"
            alt="talent-olympics-marketplace logo"
          />
        </router-link>
      </div>
      <!-- The nav -->

      <nav class="nav plus-jakarta !font-light border-t w-full border-t-neutral-300">
        <div class="w-full">
          <span
            class="text-text-black-secondary plus-jakarta text-[12px] leading-[20px ] font-semibold"
            >Course Author</span
          >
          <div class="flex items-center mt-6 gap-[12px] w-full">
            <img
              src="@/assets/img/author.png"
              class="h-[56px] rounded-full w-[56px]"
              alt=""
            />
            <h3 class="text-text-black-primary text-[14px] font-semibold leading-[22px]">
              Maurice Schweitzer
            </h3>
          </div>

          <p
            class="text-text-black-secondary text-[14px] font-medium mt-4 leading-[22px]"
          >
            Professor of Operations, Information and Decisions at the Wharton School of
            the University of Pennsylvania. Research focuses on negotiation, emotions, and
            decision-making
          </p>
        </div>
        <div class="w-full my-4"><hr class="border-neutral-400 border" /></div>
        <div class="w-full flex flex-col gap-7">
          <span
            class="text-text-black-secondary plus-jakarta text-[12px] leading-[20px ] font-semibold"
            >Course Info</span
          >
          <div class="flex flex-col justify-between gap-4 h-full">
            <div
              class="flex lg:flex-row flex-col lg:items-center items-start gap-2 justify-between"
            >
              <h3
                class="text-text-black-secondary leading-[22px] text-[14px] font-medium"
              >
                Level
              </h3>
              <span
                class="text-text-black-primary leading-[22px] text-[14px] font-medium"
              >
                Not Specified
              </span>
            </div>
            <div
              class="flex lg:flex-row flex-col lg:items-center items-start gap-2 justify-between"
            >
              <h3
                class="text-text-black-secondary leading-[22px] text-[14px] font-medium"
              >
                Released
              </h3>
              <span
                class="text-text-black-primary leading-[22px] text-[14px] font-medium"
              >
                24th Nov 2024
              </span>
            </div>
            <div
              class="flex lg:flex-row flex-col lg:items-center items-start gap-2 justify-between"
            >
              <h3
                class="text-text-black-secondary leading-[22px] text-[14px] font-medium"
              >
                Reviewed
              </h3>
              <span
                class="text-text-black-primary leading-[22px] text-[14px] font-medium"
              >
                29th Nov 2024
              </span>
            </div>
            <div
              class="flex lg:flex-row flex-col lg:items-center items-start gap-2 justify-between"
            >
              <h3
                class="text-text-black-secondary leading-[22px] text-[14px] font-medium"
              >
                Ratings
              </h3>
              <span
                class="text-text-black-primary flex flex-row gap-[4px] items-center leading-[22px] text-[14px] font-medium"
                ><RoundedConnerStar v-for="i in 4" :key="i" />
              </span>
            </div>
          </div>
          <div class="mt-4 flex flex-col gap-[8px]">
            <ProgressBar :currentValue="50" :targetValue="100" />
            <p class="text-text-black-secondary text-[14px] leading-[22px] font-medium">
              {{ parseInt((50 / 100) * 100).toString() }}% out of 100%
            </p>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script setup>
import RoundedConnerStar from "@/components/icons/RoundedConnerStar.vue";

// import { useStore } from "@/stores/user";
// import HomeIcon from "@/components/icons/homeIcon.vue";
// import MessageIcon from "@/components/icons/messageIcon.vue";
// import ApplicationIcon from "@/components/icons/applicationIcon.vue";
// import MyjobsIcon from "@/components/icons/searchIcon.vue";
// import Courses from "@/components/icons/coursesIcon.vue";
// import MySchedule from "@/components/icons/calenderIcon.vue";
// import GoProIcon from "@/components/icons/starIcon.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
// const store = useStore();

// const user = store.getUser;

// const feature = computed(() => {
//   return Array.isArray(store.features) ? store.features : [];
// });

// const logOut = () => {
//   localStorage.clear();
//   router.push({
//     name: "login",
//   });
// };
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  min-height: 100vh;
  height: 100vh;
  overflow-y: scroll;
  //   background-color: $color-white;

  &::-webkit-scrollbar {
    width: 0.4vw;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    // background-color: $color-primary;
    border-radius: 50px;
  }

  .logo {
    margin-bottom: 20px;
  }

  nav {
    width: 100%;
    // border-top: 1px solid $color-grey-100;
    padding-top: 20px;
    margin-bottom: 10px;

    .link-group {
      margin-top: 35px;

      h4 {
        font-size: 0.8rem;
        // color: $color-grey-300;
        padding-inline: 10px;
        text-transform: uppercase;
        font-weight: 700;
      }
    }

    .link {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      padding: 10px;

      &:hover {
        // background-color: rgba($color: $color-primary, $alpha: 0.1);
        border-radius: 5px;
      }

      &.router-link-exact-active {
        .link__icon {
          // background-color: rgba($color: $color-primary, $alpha: 20);
          //   color: $color-grey-100;

          i {
            // color: $color-grey-100;
          }
        }

        .link__text {
          font-weight: 300;
          //   color: $color-primary;
          // background-color: rgba($color: $color-primary, $alpha: 0.1);
        }
      }

      &__icon {
        width: 35px;
        height: 35px;
        border-radius: 10px;
        background-color: transparent;
        display: grid;
        place-items: center;
        margin-right: 20px;

        i {
          font-size: 1.1rem;
          //   color: $color-grey-400;
        }
      }

      &__text {
        font-size: 0.9rem;
        // color: $color-grey-400;
      }
    }
  }

  .cta {
    display: inline-block;
    padding: 10px 20px;
    // background-color: $color-primary;
    // color: $color-white;
    font-size: 0.75rem;
    border-radius: 5px;
    transition: 0.15s ease;

    &:hover {
      //   background-color: darken($color: $color-primary, $amount: 10%);
    }
  }
}
</style>
