import React from "react"
import Card from "./../Card"
import Profile from "./profile.styles"
import { Spacer } from "./../Shared"

import profilePic from "./../../images/avataaars_no_backdrop.png"

const ProfileCard = ({ name, description, attributes }) => {
  return (
    <Card>
      <Profile>
        <Profile.Details>
          <Profile.Image src={profilePic}></Profile.Image>
          <Profile.Social>
            <Profile.Name>{name}</Profile.Name>
            <Profile.Description>{description}</Profile.Description>
            <Profile.Links></Profile.Links>
            <Spacer height={20} />
            <Profile.Credit>
              Card styles inspired by{" "}
              <a href="http://dev.to/lmuller18">dev.to</a>.
            </Profile.Credit>
          </Profile.Social>
        </Profile.Details>
        <Profile.About>
          {attributes.map((attr, i) => (
            <React.Fragment key={attr.key}>
              <Profile.About.Pair>
                <Profile.About.Pair.Key>{attr.key}</Profile.About.Pair.Key>
                <Profile.About.Pair.Value>
                  {attr.value}
                </Profile.About.Pair.Value>
              </Profile.About.Pair>
              <Spacer height={15} hidden={i === attributes.length - 1} />
            </React.Fragment>
          ))}
        </Profile.About>
      </Profile>
    </Card>
  )
}

export default ProfileCard
