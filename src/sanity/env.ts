export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-06'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skqndleBnSDJTwIT2HM9lFDxEPKoRNpwltbqpVQs0xvPHMHaanYxArnta8Ft0GgiPETVX4EEGYYqubjkWroZlNPydHSxRnVeKED9EmqWwlau51PVb1pmVieor4Ki3LMhsV7uQ6WcPrW7Wpevfpgs1FJPbqYQhnEMZEml0j6fDYuSW9jEQSNo",
  'Missing environment variable: NEXT_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
