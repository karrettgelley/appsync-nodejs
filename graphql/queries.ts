/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      createdAt
      updatedAt
      firstName
      lastName
      email
      phone
      description
      avatar {
        key
        bucket
        region
      }
      cover {
        key
        bucket
        region
      }
      primaryColor
      groups {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      adminGroups {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      groupInvitations {
        items {
          id
          inviteeID
          inviterID
          groupID
          message
          createdAt
          updatedAt
          status
          invitee {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          inviter {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      upcomingEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      potentialEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      pastEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      waitlistedEvents {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      notifications {
        items {
          id
          userID
          createdAt
          updatedAt
          description
          type
          webLink
          mobileLink
          status
        }
        nextToken
      }
    }
  }
`;
export const userByEmail = /* GraphQL */ `
  query UserByEmail(
    $email: AWSEmail
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        name
        description
        numMembers
        numAdmins
        cover {
          key
          bucket
          region
        }
        primaryColor
        members {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        admins {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        invitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      createdAt
      updatedAt
      name
      description
      numMembers
      numAdmins
      cover {
        key
        bucket
        region
      }
      primaryColor
      members {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      admins {
        items {
          id
          userID
          groupID
          role
          visits
          createdAt
          updatedAt
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      invitations {
        items {
          id
          inviteeID
          inviterID
          groupID
          message
          createdAt
          updatedAt
          status
          invitee {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          inviter {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
        }
        nextToken
      }
      upcomingEvents {
        items {
          id
          name
          createdAt
          updatedAt
          groupID
          startDate
          endDate
          regStart
          regEnd
          capacity
          description
          cover {
            key
            bucket
            region
          }
          maxPlayersPerPairing
          numPlayers
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
          players {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistPlayers {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          rounds {
            items {
              id
              createdAt
              updatedAt
              date
              eventID
              pairingType
            }
            nextToken
          }
        }
        nextToken
      }
      pastEvents {
        items {
          id
          name
          createdAt
          updatedAt
          groupID
          startDate
          endDate
          regStart
          regEnd
          capacity
          description
          cover {
            key
            bucket
            region
          }
          maxPlayersPerPairing
          numPlayers
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
          players {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistPlayers {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          rounds {
            items {
              id
              createdAt
              updatedAt
              date
              eventID
              pairingType
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const getUserGroup = /* GraphQL */ `
  query GetUserGroup($id: ID!) {
    getUserGroup(id: $id) {
      id
      userID
      groupID
      role
      visits
      createdAt
      updatedAt
      user {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      group {
        id
        createdAt
        updatedAt
        name
        description
        numMembers
        numAdmins
        cover {
          key
          bucket
          region
        }
        primaryColor
        members {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        admins {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        invitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const listUserGroups = /* GraphQL */ `
  query ListUserGroups(
    $filter: ModelUserGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        groupID
        role
        visits
        createdAt
        updatedAt
        user {
          id
          createdAt
          updatedAt
          firstName
          lastName
          email
          phone
          description
          avatar {
            key
            bucket
            region
          }
          cover {
            key
            bucket
            region
          }
          primaryColor
          groups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          adminGroups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          groupInvitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          potentialEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          pastEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistedEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          notifications {
            items {
              id
              userID
              createdAt
              updatedAt
              description
              type
              webLink
              mobileLink
              status
            }
            nextToken
          }
        }
        group {
          id
          createdAt
          updatedAt
          name
          description
          numMembers
          numAdmins
          cover {
            key
            bucket
            region
          }
          primaryColor
          members {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          admins {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          invitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
          pastEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const groupsByUserByRole = /* GraphQL */ `
  query GroupsByUserByRole(
    $userID: ID
    $role: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupsByUserByRole(
      userID: $userID
      role: $role
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        groupID
        role
        visits
        createdAt
        updatedAt
        user {
          id
          createdAt
          updatedAt
          firstName
          lastName
          email
          phone
          description
          avatar {
            key
            bucket
            region
          }
          cover {
            key
            bucket
            region
          }
          primaryColor
          groups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          adminGroups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          groupInvitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          potentialEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          pastEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistedEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          notifications {
            items {
              id
              userID
              createdAt
              updatedAt
              description
              type
              webLink
              mobileLink
              status
            }
            nextToken
          }
        }
        group {
          id
          createdAt
          updatedAt
          name
          description
          numMembers
          numAdmins
          cover {
            key
            bucket
            region
          }
          primaryColor
          members {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          admins {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          invitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
          pastEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getUserGroupByUserByGroup = /* GraphQL */ `
  query GetUserGroupByUserByGroup(
    $userID: ID
    $groupID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserGroupByUserByGroup(
      userID: $userID
      groupID: $groupID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        groupID
        role
        visits
        createdAt
        updatedAt
        user {
          id
          createdAt
          updatedAt
          firstName
          lastName
          email
          phone
          description
          avatar {
            key
            bucket
            region
          }
          cover {
            key
            bucket
            region
          }
          primaryColor
          groups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          adminGroups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          groupInvitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          potentialEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          pastEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistedEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          notifications {
            items {
              id
              userID
              createdAt
              updatedAt
              description
              type
              webLink
              mobileLink
              status
            }
            nextToken
          }
        }
        group {
          id
          createdAt
          updatedAt
          name
          description
          numMembers
          numAdmins
          cover {
            key
            bucket
            region
          }
          primaryColor
          members {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          admins {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          invitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
          pastEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getError = /* GraphQL */ `
  query GetError($id: ID!) {
    getError(id: $id) {
      id
      message
      fileName
      lineNumber
      frontend
      createdAt
      updatedAt
    }
  }
`;
export const listErrors = /* GraphQL */ `
  query ListErrors(
    $filter: ModelErrorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listErrors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        fileName
        lineNumber
        frontend
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroupInvitation = /* GraphQL */ `
  query GetGroupInvitation($id: ID!) {
    getGroupInvitation(id: $id) {
      id
      inviteeID
      inviterID
      groupID
      message
      createdAt
      updatedAt
      status
      invitee {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      inviter {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      group {
        id
        createdAt
        updatedAt
        name
        description
        numMembers
        numAdmins
        cover {
          key
          bucket
          region
        }
        primaryColor
        members {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        admins {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        invitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const listGroupInvitations = /* GraphQL */ `
  query ListGroupInvitations(
    $filter: ModelGroupInvitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupInvitations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        inviteeID
        inviterID
        groupID
        message
        createdAt
        updatedAt
        status
        invitee {
          id
          createdAt
          updatedAt
          firstName
          lastName
          email
          phone
          description
          avatar {
            key
            bucket
            region
          }
          cover {
            key
            bucket
            region
          }
          primaryColor
          groups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          adminGroups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          groupInvitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          potentialEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          pastEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistedEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          notifications {
            items {
              id
              userID
              createdAt
              updatedAt
              description
              type
              webLink
              mobileLink
              status
            }
            nextToken
          }
        }
        inviter {
          id
          createdAt
          updatedAt
          firstName
          lastName
          email
          phone
          description
          avatar {
            key
            bucket
            region
          }
          cover {
            key
            bucket
            region
          }
          primaryColor
          groups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          adminGroups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          groupInvitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          potentialEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          pastEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistedEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          notifications {
            items {
              id
              userID
              createdAt
              updatedAt
              description
              type
              webLink
              mobileLink
              status
            }
            nextToken
          }
        }
        group {
          id
          createdAt
          updatedAt
          name
          description
          numMembers
          numAdmins
          cover {
            key
            bucket
            region
          }
          primaryColor
          members {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          admins {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          invitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
          pastEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        groupID
        startDate
        endDate
        regStart
        regEnd
        capacity
        description
        cover {
          key
          bucket
          region
        }
        maxPlayersPerPairing
        numPlayers
        group {
          id
          createdAt
          updatedAt
          name
          description
          numMembers
          numAdmins
          cover {
            key
            bucket
            region
          }
          primaryColor
          members {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          admins {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          invitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
          pastEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
        }
        players {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistPlayers {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        rounds {
          items {
            id
            createdAt
            updatedAt
            date
            eventID
            pairingType
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            pairings {
              nextToken
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      createdAt
      updatedAt
      groupID
      startDate
      endDate
      regStart
      regEnd
      capacity
      description
      cover {
        key
        bucket
        region
      }
      maxPlayersPerPairing
      numPlayers
      group {
        id
        createdAt
        updatedAt
        name
        description
        numMembers
        numAdmins
        cover {
          key
          bucket
          region
        }
        primaryColor
        members {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        admins {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        invitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          nextToken
        }
      }
      players {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      waitlistPlayers {
        items {
          id
          createdAt
          updatedAt
          userID
          eventID
          status
          endDate
          user {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
        }
        nextToken
      }
      rounds {
        items {
          id
          createdAt
          updatedAt
          date
          eventID
          pairingType
          event {
            id
            name
            createdAt
            updatedAt
            groupID
            startDate
            endDate
            regStart
            regEnd
            capacity
            description
            cover {
              key
              bucket
              region
            }
            maxPlayersPerPairing
            numPlayers
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
            players {
              nextToken
            }
            waitlistPlayers {
              nextToken
            }
            rounds {
              nextToken
            }
          }
          pairings {
            items {
              id
              createdAt
              updatedAt
              teeTime
              roundID
              numPlayers
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const getUserEvent = /* GraphQL */ `
  query GetUserEvent($id: ID!) {
    getUserEvent(id: $id) {
      id
      createdAt
      updatedAt
      userID
      eventID
      status
      endDate
      user {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      event {
        id
        name
        createdAt
        updatedAt
        groupID
        startDate
        endDate
        regStart
        regEnd
        capacity
        description
        cover {
          key
          bucket
          region
        }
        maxPlayersPerPairing
        numPlayers
        group {
          id
          createdAt
          updatedAt
          name
          description
          numMembers
          numAdmins
          cover {
            key
            bucket
            region
          }
          primaryColor
          members {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          admins {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          invitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
          pastEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
        }
        players {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistPlayers {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        rounds {
          items {
            id
            createdAt
            updatedAt
            date
            eventID
            pairingType
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            pairings {
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const listUserEvents = /* GraphQL */ `
  query ListUserEvents(
    $filter: ModelUserEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        userID
        eventID
        status
        endDate
        user {
          id
          createdAt
          updatedAt
          firstName
          lastName
          email
          phone
          description
          avatar {
            key
            bucket
            region
          }
          cover {
            key
            bucket
            region
          }
          primaryColor
          groups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          adminGroups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          groupInvitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          potentialEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          pastEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistedEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          notifications {
            items {
              id
              userID
              createdAt
              updatedAt
              description
              type
              webLink
              mobileLink
              status
            }
            nextToken
          }
        }
        event {
          id
          name
          createdAt
          updatedAt
          groupID
          startDate
          endDate
          regStart
          regEnd
          capacity
          description
          cover {
            key
            bucket
            region
          }
          maxPlayersPerPairing
          numPlayers
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
          players {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistPlayers {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          rounds {
            items {
              id
              createdAt
              updatedAt
              date
              eventID
              pairingType
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getUserEventByUserByEvent = /* GraphQL */ `
  query GetUserEventByUserByEvent(
    $userID: ID
    $eventID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserEventByUserByEvent(
      userID: $userID
      eventID: $eventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        userID
        eventID
        status
        endDate
        user {
          id
          createdAt
          updatedAt
          firstName
          lastName
          email
          phone
          description
          avatar {
            key
            bucket
            region
          }
          cover {
            key
            bucket
            region
          }
          primaryColor
          groups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          adminGroups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          groupInvitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          potentialEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          pastEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistedEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          notifications {
            items {
              id
              userID
              createdAt
              updatedAt
              description
              type
              webLink
              mobileLink
              status
            }
            nextToken
          }
        }
        event {
          id
          name
          createdAt
          updatedAt
          groupID
          startDate
          endDate
          regStart
          regEnd
          capacity
          description
          cover {
            key
            bucket
            region
          }
          maxPlayersPerPairing
          numPlayers
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
          players {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistPlayers {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          rounds {
            items {
              id
              createdAt
              updatedAt
              date
              eventID
              pairingType
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getRound = /* GraphQL */ `
  query GetRound($id: ID!) {
    getRound(id: $id) {
      id
      createdAt
      updatedAt
      date
      eventID
      pairingType
      event {
        id
        name
        createdAt
        updatedAt
        groupID
        startDate
        endDate
        regStart
        regEnd
        capacity
        description
        cover {
          key
          bucket
          region
        }
        maxPlayersPerPairing
        numPlayers
        group {
          id
          createdAt
          updatedAt
          name
          description
          numMembers
          numAdmins
          cover {
            key
            bucket
            region
          }
          primaryColor
          members {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          admins {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          invitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
          pastEvents {
            items {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            nextToken
          }
        }
        players {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistPlayers {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        rounds {
          items {
            id
            createdAt
            updatedAt
            date
            eventID
            pairingType
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
            pairings {
              nextToken
            }
          }
          nextToken
        }
      }
      pairings {
        items {
          id
          createdAt
          updatedAt
          teeTime
          roundID
          numPlayers
          players {
            items {
              id
              createdAt
              updatedAt
              playerID
              pairingID
              eventID
              roundID
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const listRounds = /* GraphQL */ `
  query ListRounds(
    $filter: ModelRoundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRounds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        date
        eventID
        pairingType
        event {
          id
          name
          createdAt
          updatedAt
          groupID
          startDate
          endDate
          regStart
          regEnd
          capacity
          description
          cover {
            key
            bucket
            region
          }
          maxPlayersPerPairing
          numPlayers
          group {
            id
            createdAt
            updatedAt
            name
            description
            numMembers
            numAdmins
            cover {
              key
              bucket
              region
            }
            primaryColor
            members {
              nextToken
            }
            admins {
              nextToken
            }
            invitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
          }
          players {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistPlayers {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          rounds {
            items {
              id
              createdAt
              updatedAt
              date
              eventID
              pairingType
            }
            nextToken
          }
        }
        pairings {
          items {
            id
            createdAt
            updatedAt
            teeTime
            roundID
            numPlayers
            players {
              nextToken
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listPairings = /* GraphQL */ `
  query ListPairings(
    $filter: ModelPairingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPairings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        teeTime
        roundID
        numPlayers
        players {
          items {
            id
            createdAt
            updatedAt
            playerID
            pairingID
            eventID
            roundID
            player {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            pairing {
              id
              createdAt
              updatedAt
              teeTime
              roundID
              numPlayers
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPairing = /* GraphQL */ `
  query GetPairing($id: ID!) {
    getPairing(id: $id) {
      id
      createdAt
      updatedAt
      teeTime
      roundID
      numPlayers
      players {
        items {
          id
          createdAt
          updatedAt
          playerID
          pairingID
          eventID
          roundID
          player {
            id
            createdAt
            updatedAt
            firstName
            lastName
            email
            phone
            description
            avatar {
              key
              bucket
              region
            }
            cover {
              key
              bucket
              region
            }
            primaryColor
            groups {
              nextToken
            }
            adminGroups {
              nextToken
            }
            groupInvitations {
              nextToken
            }
            upcomingEvents {
              nextToken
            }
            potentialEvents {
              nextToken
            }
            pastEvents {
              nextToken
            }
            waitlistedEvents {
              nextToken
            }
            notifications {
              nextToken
            }
          }
          pairing {
            id
            createdAt
            updatedAt
            teeTime
            roundID
            numPlayers
            players {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const getPlayerPairing = /* GraphQL */ `
  query GetPlayerPairing($id: ID!) {
    getPlayerPairing(id: $id) {
      id
      createdAt
      updatedAt
      playerID
      pairingID
      eventID
      roundID
      player {
        id
        createdAt
        updatedAt
        firstName
        lastName
        email
        phone
        description
        avatar {
          key
          bucket
          region
        }
        cover {
          key
          bucket
          region
        }
        primaryColor
        groups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        adminGroups {
          items {
            id
            userID
            groupID
            role
            visits
            createdAt
            updatedAt
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        groupInvitations {
          items {
            id
            inviteeID
            inviterID
            groupID
            message
            createdAt
            updatedAt
            status
            invitee {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            inviter {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            group {
              id
              createdAt
              updatedAt
              name
              description
              numMembers
              numAdmins
              primaryColor
            }
          }
          nextToken
        }
        upcomingEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        potentialEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        pastEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        waitlistedEvents {
          items {
            id
            createdAt
            updatedAt
            userID
            eventID
            status
            endDate
            user {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            event {
              id
              name
              createdAt
              updatedAt
              groupID
              startDate
              endDate
              regStart
              regEnd
              capacity
              description
              maxPlayersPerPairing
              numPlayers
            }
          }
          nextToken
        }
        notifications {
          items {
            id
            userID
            createdAt
            updatedAt
            description
            type
            webLink
            mobileLink
            status
          }
          nextToken
        }
      }
      pairing {
        id
        createdAt
        updatedAt
        teeTime
        roundID
        numPlayers
        players {
          items {
            id
            createdAt
            updatedAt
            playerID
            pairingID
            eventID
            roundID
            player {
              id
              createdAt
              updatedAt
              firstName
              lastName
              email
              phone
              description
              primaryColor
            }
            pairing {
              id
              createdAt
              updatedAt
              teeTime
              roundID
              numPlayers
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const listPlayerPairings = /* GraphQL */ `
  query ListPlayerPairings(
    $filter: ModelPlayerPairingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerPairings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        playerID
        pairingID
        eventID
        roundID
        player {
          id
          createdAt
          updatedAt
          firstName
          lastName
          email
          phone
          description
          avatar {
            key
            bucket
            region
          }
          cover {
            key
            bucket
            region
          }
          primaryColor
          groups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          adminGroups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          groupInvitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          potentialEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          pastEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistedEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          notifications {
            items {
              id
              userID
              createdAt
              updatedAt
              description
              type
              webLink
              mobileLink
              status
            }
            nextToken
          }
        }
        pairing {
          id
          createdAt
          updatedAt
          teeTime
          roundID
          numPlayers
          players {
            items {
              id
              createdAt
              updatedAt
              playerID
              pairingID
              eventID
              roundID
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const playerPairingsByPlayerByEvent = /* GraphQL */ `
  query PlayerPairingsByPlayerByEvent(
    $playerID: ID
    $eventID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPlayerPairingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    playerPairingsByPlayerByEvent(
      playerID: $playerID
      eventID: $eventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        playerID
        pairingID
        eventID
        roundID
        player {
          id
          createdAt
          updatedAt
          firstName
          lastName
          email
          phone
          description
          avatar {
            key
            bucket
            region
          }
          cover {
            key
            bucket
            region
          }
          primaryColor
          groups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          adminGroups {
            items {
              id
              userID
              groupID
              role
              visits
              createdAt
              updatedAt
            }
            nextToken
          }
          groupInvitations {
            items {
              id
              inviteeID
              inviterID
              groupID
              message
              createdAt
              updatedAt
              status
            }
            nextToken
          }
          upcomingEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          potentialEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          pastEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          waitlistedEvents {
            items {
              id
              createdAt
              updatedAt
              userID
              eventID
              status
              endDate
            }
            nextToken
          }
          notifications {
            items {
              id
              userID
              createdAt
              updatedAt
              description
              type
              webLink
              mobileLink
              status
            }
            nextToken
          }
        }
        pairing {
          id
          createdAt
          updatedAt
          teeTime
          roundID
          numPlayers
          players {
            items {
              id
              createdAt
              updatedAt
              playerID
              pairingID
              eventID
              roundID
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      userID
      createdAt
      updatedAt
      description
      type
      webLink
      mobileLink
      status
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        createdAt
        updatedAt
        description
        type
        webLink
        mobileLink
        status
      }
      nextToken
    }
  }
`;
