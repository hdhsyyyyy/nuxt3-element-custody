<script lang="ts" setup>
import { selectToken, replaceMoney } from '~/utils/utils'

const tableData = [
  {
    date: '2016-05-03',
    coin: 'Binance USD',
    token: 'Coin',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    coinCount: '0.0004000008BMX',
    uCount: '88003.3',
  },
  {
    date: '2016-05-02',
    coin: 'Binance USD',
    token: 'Coin',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    coinCount: '0.0004008BMX',
    uCount: '88003.3',
  },
  {
    date: '2016-05-04',
    coin: 'Binance USD',
    token: 'Coin',
    name: 'Tommyyyyyasdsadsds',
    address: 'No. 189, Grove St, Los Angeles',
    coinCount: '0.0004008BMX',
    uCount: '88003.3',
  },
  {
    date: '2016-05-01',
    coin: 'Binance USD',
    token: 'Coin',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    coinCount: '0.0004008BMX',
    uCount: '88003.3',
  },
]

const form = reactive({
  chainTokenList: [],
})

const modal = reactive({
  deposit: false,
  widthDraw: false,
})

const row = ref(null)

const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
          {
            value: 'input',
            label: 'Input',
          },
          {
            value: 'input-number',
            label: 'InputNumber',
          },
          {
            value: 'select',
            label: 'Select',
          },
          {
            value: 'cascader',
            label: 'Cascader',
          },
          {
            value: 'switch',
            label: 'Switch',
          },
          {
            value: 'slider',
            label: 'Slider',
          },
          {
            value: 'time-picker',
            label: 'TimePicker',
          },
          {
            value: 'date-picker',
            label: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker',
          },
          {
            value: 'upload',
            label: 'Upload',
          },
          {
            value: 'rate',
            label: 'Rate',
          },
          {
            value: 'form',
            label: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table',
          },
          {
            value: 'tag',
            label: 'Tag',
          },
          {
            value: 'progress',
            label: 'Progress',
          },
          {
            value: 'tree',
            label: 'Tree',
          },
          {
            value: 'pagination',
            label: 'Pagination',
          },
          {
            value: 'badge',
            label: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert',
          },
          {
            value: 'loading',
            label: 'Loading',
          },
          {
            value: 'message',
            label: 'Message',
          },
          {
            value: 'message-box',
            label: 'MessageBox',
          },
          {
            value: 'notification',
            label: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu',
          },
          {
            value: 'tabs',
            label: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label: 'Dropdown',
          },
          {
            value: 'steps',
            label: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog',
          },
          {
            value: 'tooltip',
            label: 'Tooltip',
          },
          {
            value: 'popover',
            label: 'Popover',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'carousel',
            label: 'Carousel',
          },
          {
            value: 'collapse',
            label: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
]

const openDeposit = (data) => {
  row.value = data
  modal.deposit = true
}

const openWidthDraw = (data) => {
  row.value = data
  modal.widthDraw = true
}
</script>

<template>
  <BuilderFormQuery>
    <el-cascader
      v-model="form.chainTokenList"
      :placeholder="$t('common.query.placeholder.select_token')"
      filterable
      clearable
      :props="{ checkStrictly: true }"
      :filter-method="selectToken"
      :options="options"
    ></el-cascader>
    <template #footer>
      <el-button type="primary" round>{{
        $t('common.query.confirm')
      }}</el-button>
      <el-link>{{ $t('common.query.reset') }}</el-link>
    </template>
  </BuilderFormQuery>
  <BuilderTablePage>
    <template #table>
      <BaseTable :data="tableData">
        <el-table-column :label="$t('pages.wallet.column.coin')" width="180">
          <template #default="scope">
            <TableMultiContent :data="[scope.row.coin, scope.row.token]" />
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          :label="$t('pages.wallet.column.network')"
          width="180"
          header-align="right"
          align="right"
        />
        <el-table-column
          :label="$t('pages.wallet.column.amount')"
          header-align="right"
        >
          <template #default="scope">
            <TableMultiContent
              :data="[
                scope.row.coinCount,
                `≈ ${replaceMoney(scope.row.uCount)}USD`,
              ]"
              align="right"
            />
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('common.table.action')"
          header-align="right"
          align="right"
        >
          <template #default="scope">
            <el-button type="primary" round @click="openDeposit(scope.row)">{{
              $t('pages.wallet.deposit.title')
            }}</el-button>
            <el-button round @click="openWidthDraw(scope.row)">{{
              $t('pages.wallet.withdraw.title')
            }}</el-button>
          </template>
        </el-table-column>
      </BaseTable>
    </template>
    <template #pagination>
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </template>
  </BuilderTablePage>
  <ClientOnly>
    <PageWalletTokenDepositModal v-model="modal.deposit" />
    <PageWalletTokenWithDrawModal v-model="modal.widthDraw" />
  </ClientOnly>
</template>
