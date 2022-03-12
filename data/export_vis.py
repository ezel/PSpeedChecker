import json
import numpy as np
import pandas as pd
import altair as alt


def init_base(src):
    # init data
    #jVal = json.load(open(src))
    p1 = pd.read_json(src)
    p2 = p1.loc[['num', 'name', 'types', 'baseStats']].T
    
    # filter rows
    p2 = p2[ (p2.num > 0) & (p2.name.str.find('-Mega') < 0)]  # valid num & no mega
    uidx = p2.astype(
        {'num':'int32','types':str, 'baseStats': str}
                    ).drop_duplicates(subset=['num','types','baseStats']).index
    p2 = p2.loc[uidx]
    
    # transform
    p2[['type1', 'type2']] = pd.DataFrame(p2.types.tolist(), index=p2.index)
    p2[['base_hp','base_atk','base_def','base_spa','base_spd','base_spe']] = pd.DataFrame(p2.baseStats.tolist(), index=p2.index)
    p2.drop(columns=['types','baseStats'], inplace=True)
    return p2

def calc_stat(base, iv=31, ev=252, nature=1):
    return int(((base*2+iv+ev/4)*50/100+5) * nature)
    
def init_draw_test(size=20):
    df = init_base('pokedex.json')
    names = ['stats_nnzero','stats_nniv','stats_noev','stats_evmax','stats_npnoev','stats_nmax']
    vals = [(0,0,0.9),(31,0,0.9),(31,0,1),(31,252,1),(31,0,1.1),(31,252,1.1)]
    for i in range(len(names)):
        #df[names[i]] = df['base_spe'].map(lambda x : calc_stat(x, vals[i][0], vals[i][1], vals[i][2]))
        pass
    df.drop(columns=['base_hp','base_atk','base_def','base_spa','base_spd'], inplace=True)
    if size > 0 :
        df = df.sample(n=size)
    return df


def draw(data):
    source2 = data
    mybase = alt.Chart(source2).encode(
        alt.X('name:O',
              axis=alt.Axis(
                  labelAngle=-45,
                  title='Pokemon Name'
              ),
        ),
        color=alt.value("#06982d")
    )

    myrule = mybase.mark_bar().encode(
        alt.Y(
            'stats_npnoev:Q',
            title='Stats'
        ),
        alt.Y2('stats_nmax:Q'),
        color=alt.value("#ffff30")
    )

    mybar = mybase.mark_bar().encode(
        alt.Y('stats_nnzero:Q'),
        alt.Y2('stats_nniv:Q'),
        color=alt.value("#ff2030")
    )

    mybar2 = mybase.mark_bar().encode(
        alt.Y('stats_noev:Q'),
        alt.Y2('stats_evmax:Q'),
        color=alt.value("#20ff30")
    )

    tick = mybase.mark_tick().encode(
        alt.Y('stats_npnoev:Q'),
        color=alt.value('#000000')
    )

    line = mybase.mark_line(stroke='#5276A7', interpolate='monotone').encode(
        alt.Y('base_spe',
              axis=alt.Axis(title='Base', titleColor='#5276A7'))
    )

    chart = alt.layer(myrule+mybar+mybar2+tick, line).resolve_scale(
        y = 'independent'
    )

    return chart


def main():
    data = init_draw_test(20)
    chart = draw(data)
    chart.save('python_export.html')


if __name__ == "__main__":
    main()
