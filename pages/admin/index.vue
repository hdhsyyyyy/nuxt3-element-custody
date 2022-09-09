<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { ADMIN } from '~/constant'

definePageMeta({
  layout: 'page',
})

const tableData = [
  {
    date: '2016-05-03',
    coin: 'Binance USD',
    token: 'Coin',
    limits: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    email: '0.0004000008BMX',
    uCount: '≈ 88003.3USD',
    type: 'success',
  },
  {
    date: '2016-05-02',
    coin: 'Binance USD',
    token: 'Coin',
    limits: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    email: '0.0004008BMX',
    uCount: '≈ 88003.3USD',
    type: 'failed',
  },
  {
    date: '2016-05-04',
    coin: 'Binance USD',
    token: 'Coin',
    name: 'Tommyyyyyasdsadsds',
    address: 'No. 189, Grove St, Los Angeles',
    coinCount: '0.0004008BMX',
    uCount: '≈ 88003.3USD',
    type: 'info',
  },
  {
    date: '2016-05-01',
    coin: 'Binance USD',
    token: 'Coin',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    coinCount: '0.0004008BMX',
    uCount: '≈ 88003.3USD',
    type: 'warning',
  },
]

const form = reactive({
  email: '',
  states: '',
})

const loading = ref(true)
</script>

<template>
  <div>
    <BuilderTitle :name="$t('pages.admin.nav')" />
    <BuilderFormQuery rounded>
      <el-input
        v-model="form.email"
        class="w-270px"
        :placeholder="$t('pages.admin.query.enter_email')"
        clearable
        :prefix-icon="Search"
      />
      <el-select
        v-model="form.states"
        :placeholder="$t('pages.admin.query.select_states')"
        class="w-104px"
      >
        <el-option
          v-for="item in ADMIN.STATES_OPT"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <template #footer>
        <el-button type="primary" round>{{
          $t('common.query.confirm')
        }}</el-button>
        <el-link>{{ $t('common.query.reset') }}</el-link>
      </template>
      <!-- <template #options>
        <el-button type="primary" round>Invite Users</el-button>
      </template> -->
    </BuilderFormQuery>
    <BuilderTablePage>
      <template #table>
        <BaseTable :data="tableData">
          <el-table-column type="index" width="80" label="#" />
          <el-table-column
            prop="name"
            :label="$t('pages.admin.column.name')"
            header-align="right"
            align="right"
          />
          <el-table-column
            prop="email"
            :label="$t('pages.admin.column.email')"
            header-align="right"
            align="right"
          />
          <el-table-column
            prop="limits"
            :label="$t('pages.admin.column.limits')"
            header-align="right"
            align="right"
          />
          <el-table-column
            prop="states"
            :label="$t('pages.admin.column.states')"
            width="180"
          >
            <template #default="scope">
              <TableStatus :type="scope.row.type">{{
                scope.row.token
              }}</TableStatus>
            </template>
          </el-table-column>
        </BaseTable>
      </template>
      <template #pagination>
        <el-pagination background layout="prev, pager, next" :total="1000" />
      </template>
    </BuilderTablePage>
  </div>
</template>
