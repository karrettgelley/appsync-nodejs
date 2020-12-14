/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: ID) {
    onUpdateUser(id: $id) {
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
export const onCreateUserGroup = /* GraphQL */ `
  subscription OnCreateUserGroup($userID: ID) {
    onCreateUserGroup(userID: $userID) {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($id: ID) {
    onUpdateGroup(id: $id) {
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
export const onCreateUserEvent = /* GraphQL */ `
  subscription OnCreateUserEvent($userID: ID) {
    onCreateUserEvent(userID: $userID) {
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
export const onUpdateUserEventByUser = /* GraphQL */ `
  subscription OnUpdateUserEventByUser($userID: ID) {
    onUpdateUserEventByUser(userID: $userID) {
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
export const onUpdateUserEvent = /* GraphQL */ `
  subscription OnUpdateUserEvent($id: ID) {
    onUpdateUserEvent(id: $id) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($id: ID) {
    onUpdateEvent(id: $id) {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification($userID: ID) {
    onCreateNotification(userID: $userID) {
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
