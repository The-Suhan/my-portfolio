<template>
    <div class="tab-content">
        <div class="content-header">
            <h3 class="content-title">{{ $t('resume.about.title') }}</h3>
        </div>

        <div class="about-grid">
            <div v-for="field in leftFields" :key="field" class="about-row">
                <span class="field-label">{{ $t(`resume.about.fields.${field}`) }}</span>
                <span class="field-value">{{ $t(`resume.about.values.${field}`) }}</span>
            </div>

            <div v-for="field in rightFields" :key="field" class="about-row">
                <span class="field-label">{{ $t(`resume.about.fields.${field}`) }}</span>
                <span class="field-value">
                    {{
                        field === 'email'
                            ? $t(`resume.about.values.${field}`) + '@gmail.com'
                            : $t(`resume.about.values.${field}`)
                    }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
const leftFields = ['name', 'experience', 'nationality', 'freelance']
const rightFields = ['phone', 'email', 'languages']
</script>

<style scoped>
.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem 2rem;
}

.about-row {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
}

.field-label {
    font-family: 'Space Mono', monospace;
    font-size: 0.78rem;
    color: #6b7280;
    white-space: nowrap;
    min-width: 80px;
}

.field-value {
    font-family: 'Space Mono', monospace;
    font-size: 0.9rem;
    font-weight: 700;
    color: #e5e7eb;
}

@media (max-width: 640px) {
    .about-grid {
        grid-template-columns: 1fr;
    }

    .field-label {
        min-width: 90px;
    }
}
</style>