<template>
  <header class="h-screen border-r border-r-neutral-300 bg-[#fff]">
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
        <div class="flex flex-col gap-4 mt-4">
          <NavbarSidebarItem title="" :routes="services" />
        </div>
      </nav>
    </div>
  </header>
</template>
<script setup>
import NavbarSidebarItem from "@/components/Layouts/SideBar/SidebarItem.vue";
import { useRoute } from "vue-router";
import { computed, shallowRef } from "vue";

const route = useRoute();
const services = shallowRef([
  {
    name: "Profile",
    linkName: "settings",
    icon: null,
    subLinks: [],
  },
  {
    name: "Accounts",
    linkName: "settings-account",
    icon: null,
    subLinks: [],
  },
  {
    name: "Security",
    linkName: "settings-security",
    icon: null,
    subLinks: [],
  },
  {
    name: "Notifications",
    linkName: "settings-notifications",
    icon: null,
    subLinks: [],
  },
  {
    name: "Integration",
    linkName: "settings-integration",
    icon: null,
    subLinks: [],
  },
  {
    name: "Competency Management",
    linkName: "settings-competency",
    icon: null,
    subLinks: [],
  },
]);

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
