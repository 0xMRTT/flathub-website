import React from "react"
import { Meta } from "@storybook/react"
import Releases from "./Releases"
import { faker } from "@faker-js/faker"
import { Release } from "../../types/Appstream"

export default {
  title: "Components/Application/Releases",
  component: Releases,
} as Meta<typeof Releases>

export const noChangelogProvided = () => {
  const latestRelease: Release = {
    version: faker.system.semver(),
  }

  return <Releases latestRelease={latestRelease} />
}

export const withChangelog = () => {
  const latestRelease: Release = {
    version: faker.system.semver(),
    description: faker.lorem.paragraphs(3),
  }

  return <Releases latestRelease={latestRelease} />
}

export const withTimestamp = () => {
  const latestRelease: Release = {
    version: faker.system.semver(),
    description: faker.lorem.paragraphs(3),
    timestamp: faker.date.recent().getTime() / 1000,
  }

  return <Releases latestRelease={latestRelease} />
}

export const withUrl = () => {
  const latestRelease: Release = {
    version: faker.system.semver(),
    description: faker.lorem.paragraphs(3),
    timestamp: faker.date.recent().getTime() / 1000,
    url: faker.internet.url(),
  }

  return <Releases latestRelease={latestRelease} />
}
