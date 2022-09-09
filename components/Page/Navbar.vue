<script lang="ts" setup>
export interface IMenuItem {
  type: 'link'
  text: string
  route?: any
}

const { t } = useLang()
const router = useRouter()

const menus = computed((): IMenuItem[] => [
  { type: 'link', text: t('pages.account.nav'), route: { name: 'account' } },
  { type: 'link', text: t('pages.wallet.nav'), route: { name: 'wallet' } },
  { type: 'link', text: t('pages.trade.nav'), route: { name: 'trade' } },
  { type: 'link', text: t('pages.address.nav'), route: { name: 'address' } },
  { type: 'link', text: t('pages.staking.nav'), route: { name: 'staking' } },
  { type: 'link', text: t('pages.admin.nav'), route: { name: 'admin' } },
])

const userInfo = reactive({})

const logout = () => {
  localStorage.clear()
  router.push('/login')
}

onMounted(() => {
  userInfo.name = localStorage.getItem('username')
  userInfo.customer = localStorage.getItem('customer')
})
</script>

<template>
  <BuilderNavbar>
    <template #title>
      <PageLogo />
    </template>
    <template #menu>
      <div class="relative items-center ml9.2">
        <!-- <div class="relative hidden lg:flex items-center ml9.2"> -->
        <nav
          class="text-font-main leading-6 font-medium font-size-14"
          role="navigation"
        >
          <ul class="flex space-x-8px">
            <li
              v-for="(item, i) in menus"
              :key="i"
              class="w-100px menu relative hover:font-semibold hover:text-primary flex justify-center"
            >
              <NuxtLink
                tag="a"
                :to="item?.route"
                :class="`hover:no-underline capitalize text-center w-60px h-22px transition-colors duration-300`"
              >
                {{ item.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex ml-auto pl-6">
        <!-- user -->
        <SvgIcon
          name="account-circle-fill"
          theme="tertiary-icon"
          width="26px"
          height="26px"
          class="mr-8px"
        />
        <ClientOnly>
          <el-dropdown
            trigger="click"
            placement="bottom-end"
            popper-class="dark-popper"
          >
            <span
              class="flex items-center cursor-pointer text-primary font-medium"
            >
              {{ userInfo.name }}
            </span>
            <template #dropdown>
              <div
                class="w-220px box-sizing-border-box rounded-4px text-tertiary-bg bg-primary text-size-14px pt-24px pr-16px pb-11px pl-16px"
              >
                <p class="font-semibold h-22px">{{ userInfo.name }}</p>
                <p
                  class="font-size-12px h-18px pt-4px mb-10px text-font-tertiary"
                >
                  {{ userInfo.customer }}
                </p>
                <!-- <el-space wrap>
                <el-tag effect="light" round>Sup Admin</el-tag>
                <el-tag effect="light" round> Admin</el-tag>
                <el-tag effect="light" round>Super Admin</el-tag>
              </el-space> -->
                <el-tag effect="light" type="success" round>Super Admin</el-tag>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <SvgIcon
                      theme="font-white"
                      name="user"
                      width="16px"
                      height="16px"
                      class="mr-8px"
                    />
                    <span>{{ $t('pages.user.center') }}</span>
                  </el-dropdown-item>
                  <el-dropdown-item @click="logout">
                    <SvgIcon
                      theme="font-white"
                      name="logout-box-line"
                      width="16px"
                      height="16px"
                      rotate="180"
                      class="mr-8px"
                    />
                    <span>{{ $t('pages.user.exit') }}</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </div>
            </template>
          </el-dropdown>
        </ClientOnly>
      </div>
    </template>
  </BuilderNavbar>
</template>

<style lang="scss" scoped>
.menu {
  a {
    &:after {
      content: '';
      width: 32px;
      height: 2px;
      background-color: theme('colors.primary');
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      margin: auto;
      opacity: 0;
      transition: 0.3s;
    }
  }
  &:hover {
    a {
      --at-apply: font-bold;
      &:after {
        opacity: 1;
      }
    }
  }
  .router-link-active {
    --at-apply: font-bold;
    color: theme('colors.primary');
    &:after {
      opacity: 1;
    }
  }
}
</style>
